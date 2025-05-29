export class Message {
  message_content!: string;
  date?: string;
  userOwner!: boolean;
  error!: boolean;
  message_type: string = '';
}
