function Quote(props) {
  const { quote } = props;
  console.log(quote);
  return <div>{quote.quote}</div>;
}

export default Quote;
