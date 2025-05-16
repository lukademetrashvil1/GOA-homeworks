function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // ცარიელი ველების შემოწმება
    if (!firstName || !lastName || !email || !password || !terms) {
        document.getElementById('error-message').textContent = 'გთხოვთ, შეავსოთ ყველა ველი';
        return;
    }

    // მონაცემების კონსოლში გამოტანა
    console.log('სახელი:', firstName);
    console.log('გვარი:', lastName);
    console.log('ელფოსტა:', email);
    console.log('პაროლი:', password);
    console.log('წესები და პირობები:', terms ? 'მიღებულია' : 'არ არის მიღებული');
}