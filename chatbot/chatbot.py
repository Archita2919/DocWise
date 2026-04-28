from llama_cpp import Llama

model_path = "mistral-7b-instruct-v0.1.Q4_K_M.gguf"  # Your actual model file name

# Load the model
llm = Llama(model_path=model_path, n_ctx=2048)

# Chat function
while True:
    prompt = input("You: ")
    if prompt.lower() in ['exit', 'quit']:
        break

    output = llm(
        f"[INST] {prompt} [/INST]",
        max_tokens=512,
        stop=["</s>"],
        echo=False,
    )

    print("\nAI:", output["choices"][0]["text"].strip())
