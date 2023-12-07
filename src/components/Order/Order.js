const Order = () => {
  return (
    <>
      <form>
        <select name="distance" defaultValue="less-distance">
          <option value="less-distance">Menor distância</option>
          <option value="fewer-distance">Maior distância</option>
        </select>
      </form>
    </>
  );
};

export default Order;
