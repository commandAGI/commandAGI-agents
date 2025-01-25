import {Agent as CommandAGIAgent} from "commandagi-agents";
import { BaseChatModel } from "langchain/chat_models/base";

export class CommandAGIChatModel extends BaseChatModel {
    constructor(public readonly commandAGIAgent: CommandAGIAgent) {
}