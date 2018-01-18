import { UserType } from "./User";

export default interface Message {
  id: number
  userType: UserType
  type: MessageType
  context: string
}

export enum MessageType {
  TEXT,
  IMAGE,
  VIDEO,
  AUDIO
}