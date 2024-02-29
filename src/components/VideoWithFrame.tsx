import Popular from "./Popular"
import New from "./New"
import Video from "./Video"

export default function VideoWithFrame({...props}) {
  if (props.views > 1000) {
    return (
      <Popular key={props.views}>
        <Video key={props.views} {...props}/>
      </Popular> 
    )
  } else if (props.views < 100) {
    return (
      <New key={props.views}>
        <Video key={props.views} {...props}/>
      </New> 
    )
  } else {
    return(
      <Video key={props.views} {...props}/>
    )
  } 
};