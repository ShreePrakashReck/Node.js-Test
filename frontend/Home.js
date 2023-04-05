let table = document.getElementById("table");

const home = async () => {
  const res = await fetch("http://localhost:3001/api/post/all");
  let resDatas = JSON.parse(await res.text());
  let count = 1;
  for (let data of resDatas) {
    table.innerHTML += `
        <tr class="table-row">
        <td>${count}</td>
        <td>${data.name}</td>
        <td>₹ ${data.last.toString().replace(".", ",")}</td>
        <td>₹ ${data.Buy.toString().replace(
          ".",
          ","
        )}/₹ ${data.SellPrice.toString().replace(".", ",")}</td>
        <td>₹ ${data.volume.toString().replace(".", ",")}</td>
        <td>${data.base_unit}</td>
        </tr>`;
    count += 1;
  }
};
home();
