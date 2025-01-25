export const tools = [
    {
        type: "function",
        function: {
            name: "wait_for_input",
            description: "Wait for user input for an optional maximum duration.",
            parameters: {
                type: "object",
                properties: {
                    maxDuration: {
                        type: "number",
                        description: "Maximum duration to wait in milliseconds (optional)."
                    }
                },
                required: [],
                additionalProperties: false
            },
            strict: true
        }
    },
    {
        type: "function", 
        function: {
            name: "click",
            description: "Perform a mouse click at specific coordinates.",
            parameters: {
                type: "object",
                properties: {
                    x: {
                        type: "number",
                        description: "X coordinate for the click position."
                    },
                    y: {
                        type: "number", 
                        description: "Y coordinate for the click position."
                    }
                },
                required: ["x", "y"],
                additionalProperties: false
            },
            strict: true
        }
    },
    {
        type: "function",
        function: {
            name: "drag",
            description: "Perform a drag operation from one point to another.",
            parameters: {
                type: "object",
                properties: {
                    startX: {
                        type: "number",
                        description: "Starting X coordinate for the drag operation."
                    },
                    startY: {
                        type: "number",
                        description: "Starting Y coordinate for the drag operation."
                    },
                    endX: {
                        type: "number",
                        description: "Ending X coordinate for the drag operation."
                    },
                    endY: {
                        type: "number",
                        description: "Ending Y coordinate for the drag operation."
                    }
                },
                required: ["startX", "startY", "endX", "endY"],
                additionalProperties: false
            },
            strict: true
        }
    },
    {
        type: "function",
        function: {
            name: "scroll",
            description: "Perform a vertical scroll operation.",
            parameters: {
                type: "object",
                properties: {
                    amountVertical: {
                        type: "number",
                        description: "Amount to scroll vertically (positive for down, negative for up)."
                    }
                },
                required: ["amountVertical"],
                additionalProperties: false
            },
            strict: true
        }
    },
    {
        type: "function",
        function: {
            name: "type",
            description: "Type the specified text.",
            parameters: {
                type: "object",
                properties: {
                    text: {
                        type: "string",
                        description: "The text to type."
                    }
                },
                required: ["text"],
                additionalProperties: false
            },
            strict: true
        }
    },
    {
        type: "function",
        function: {
            name: "key_release",
            description: "Release a specific keyboard key.",
            parameters: {
                type: "object",
                properties: {
                    key: {
                        type: "string",
                        description: "The key to release."
                    }
                },
                required: ["key"],
                additionalProperties: false
            },
            strict: true
        }
    },
    {
        type: "function",
        function: {
            name: "key_press",
            description: "Press a specific keyboard key.",
            parameters: {
                type: "object",
                properties: {
                    key: {
                        type: "string",
                        description: "The key to press."
                    }
                },
                required: ["key"],
                additionalProperties: false
            },
            strict: true
        }
    }
]