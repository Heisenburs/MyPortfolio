function Quote(props) {
  const { quote } = props;
  console.log(quote);
  return <div className="yequote"> " {quote.quote} " - Kanye West</div>;
}

export default Quote;
