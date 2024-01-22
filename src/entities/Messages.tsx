export default interface Message {
  message?: string;
  sender: string;
  file?: {
    data: string;
    contentType: string;
    fileName: string;
  };
}
