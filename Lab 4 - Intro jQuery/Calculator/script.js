$("#lhs, #rhs").on("keyup", calculate)

function calculate(){
    var lhs = $("#lhs").val();
    var rhs = $("#rhs").val();
    var result = lhs * rhs;
    $("#result").val(result);
}
