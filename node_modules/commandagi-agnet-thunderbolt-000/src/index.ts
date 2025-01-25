class ThunderboltAgent {
    constructor() {}

    messages: Array<string>

    sendScreenshot(screenshot: Screenshot) {
        // use VLM to generate message to append to the perception context
        
        // also generate OCR record of the screenshot and append to the perception context
    }

    sendImageMessage(image: Image) {
        // use VLM to generate message to append to the perception context
    }

    sendTextMessage(message: string) {
        // directly append to the perception context
    }

    think() {
        // tell it to think and to make a plan or ensure its current plan is still valid
    }

    getAction() {
        // ask deepseek-v0 to generate a list of actions
        // - the get_screenshot tool yields execution and just returns until the next screenshot is available and the actions are recalculated
        // - actions involving the mouse are sent to UI TARS to get exact coordinates
        // - other actions are directly returned as tool calls without additional processing
    }

    start() {
        // start agent
    }

    stop() {
        // stop agent
    }
}
