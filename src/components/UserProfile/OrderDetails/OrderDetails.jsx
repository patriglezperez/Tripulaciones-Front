import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function OrderDetails(props) {
  const item = props;
  console.log(item);

  return (
    <div className="orderDetails--container">
      <div>
        <p>{props.orderName}</p>
        <p className="orderDetails--light">{props.orderDate}</p>
      </div>

      <ArrowForwardIosIcon fontSize="small" color="secondary" />
    </div>
  );
}
export default OrderDetails;
