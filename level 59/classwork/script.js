function submitForm() {
    // სახელი და გვარი
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // checkbox-ის სტატუსი
    const isChecked = document.getElementById('checkbox').checked;

    // კონსოლში შედეგის გამოტანა
    console.log("სახელი: " + firstName);
    console.log("გვარი: " + lastName);
    console.log("checkbox სტატუსი: " + isChecked);
}
