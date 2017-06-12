>>> template string
	可用

. '原先'

$("#result").append(
  "There are <b>" + basket.count + "</b> " +
  "items in your basket, " +
  "<em>" + basket.onSale +
  "</em> are on sale!"
);

. '现在'

let obj = {
        count:2
    }
document.getElementById("template").innerHTML = `There ar <b>${obj.count}</b> items`;

	用反引号 (`)来标识起始，用${}来引用变量，而且所有的空格和缩进都会被保留在输出之中，\