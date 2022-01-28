function posting(url, body) {
	console.log("Body=", body)
	let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}
function chamandoDados() {
	event.preventDefault();
	let url = "example";
	let nome = document.getElementById("userName").value;
	let telefone = document.getElementById("phoneNumber").value;
	console.log(nome);
	console.log(telefone);

	body = {
	  "apiToken": "example",
	  "id": null,
	  "planId": "example",
	  "value": null,
	  "freight": null,
	  "freightType": null,
	  "totalValue": null,
	  "metadata": null,
	  "paymentType": 99,
	  "status": 80,
	  "customEvent": null,
	  "paymentLine": null,
	  "date": null,
	  "clientName": nome,
	  "clientEmail": null,
	  "clientPhoneNumber": telefone,
	  "clientDocument": null,
	  "clientAddress": null,
	  "clientAddressNumber": null,
	  "clientAddressComp": null,
	  "clientAddressDistrict": null,
	  "clientAddressCity": null,
	  "clientAddressState": null,
	  "clientAddressCountry": null,
	  "clientZipCode": null,
	  "checkoutUrl": null,
	  "boletoUrl": null,
	  "pixQrCode": null,
	  "pixUrl": null
    }

    posting(url, body);
}