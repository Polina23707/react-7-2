import Popular from "./Popular"
import New from "./New"
import Article from "./Article"

export default function ArticleWithFrame({...props}) {
  if (props.views > 1000) {
    return (
      <Popular key={props.views}>
        <Article key={props.title} {...props}/>
      </Popular> 
    )
  } else if (props.views < 100) {
    return (
      <New key={props.views}>
        <Article key={props.title} {...props}/>
      </New> 
    )
  } else {
    return(
      <Article key={props.title} {...props}/>
    )
  } 
};