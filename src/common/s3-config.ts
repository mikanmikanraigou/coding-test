import { REACT_APP_S3_BUCKET_ENDPOINT, REACT_APP_S3_BUCKET_KEY, REACT_APP_S3_BUCKET_NAME, REACT_APP_S3_BUCKET_SECRET } from "./constants"

export const s3Config = {
    bucketName:  REACT_APP_S3_BUCKET_NAME,
    dirName: 'images',      /* Optional */
    region: 'ap-south-1',
    accessKeyId:REACT_APP_S3_BUCKET_KEY,
    secretAccessKey: REACT_APP_S3_BUCKET_SECRET,
    s3Url: REACT_APP_S3_BUCKET_ENDPOINT     /* Optional */
}