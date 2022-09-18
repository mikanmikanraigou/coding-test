import * as React from "react";
import { ArticleState, IArticle } from "../type";
import { shallowEqual, useDispatch, useSelector } from "react-redux";    
import ReactS3Client from 'react-aws-s3-typescript';
import { s3Config } from '../common/s3-config';

type Props = {
  saveArticles: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticles }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();

  const stateRef = React.useRef< {} | IArticle | undefined>();
  stateRef.current = article;

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const UploadImages = (e: any) => {
    const file: File = e.target.files[0];
    setArticle({
      ...article,
      image: file,
      imageName: file.name,
    });
    convertToBase64(file).then((result: any) => {
    });
  };

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    // saveArticles(article);
    const s3 = new ReactS3Client(s3Config);
    // s3.uploadFile(stateRef.current)
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <input type="file" id="image" accept="image/*" onChange={UploadImages} />
      <button disabled={article === undefined ? true : false}>
        Add Article
      </button>
    </form>
  );
};
