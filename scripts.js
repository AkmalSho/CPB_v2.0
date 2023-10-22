function displayFields() {
    const customerType = document.getElementById("customerType").value;
    const B2Cfields = document.getElementById("B2Cfields");
    const B2Bfields = document.getElementById("B2Bfields");
    
    if (customerType === "B2C") {
        B2Cfields.style.display = "block";
        B2Bfields.style.display = "none";
    } else if (customerType === "B2B") {
        B2Bfields.style.display = "block";
        B2Cfields.style.display = "none";
    } else {
        B2Cfields.style.display = "none";
        B2Bfields.style.display = "none";
    }
}
