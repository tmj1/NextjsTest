// The Card to be exported goes here
import ReactHtmlParser from "react-html-parser";
export const Card = () => {
    return (
        <div className='CardContainer'>
            <div className='CardImageContainer'>
                <img className='CardImage' src="#" alt=""/>
            </div>
            <div className='CardContentContainer'>
                <div className='CardTitle'>Title</div>
                <div className='CardContent'>Content</div>
            </div>
        </div>
    )
}
