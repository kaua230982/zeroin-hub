const copyButton = document.getElementById("copyButton");
const buttonText = document.getElementById("buttonText");
const scriptCode = document.getElementById("scriptCode");
const message = document.getElementById("message");

copyButton.addEventListener("click", async () => {

    const code = scriptCode.textContent;

    try {

        await navigator.clipboard.writeText(code);

        buttonText.textContent = "COPIADO ✓";

        message.textContent =
            "Script copiado para a área de transferência.";

        setTimeout(() => {

            buttonText.textContent =
                "COPIAR SCRIPT";

            message.textContent = "";

        }, 2500);

    } catch (error) {

        message.textContent =
            "Não foi possível copiar automaticamente.";

    }

});