import React, {useEffect} from "react";
import EmojiResultRow from "./EmojiResultRow";
import Clipboard from "clipboard";

function EmojiResults({emojiData}) {
    useEffect(() => {
        const clipboard = new Clipboard(".copy-it");
        return () => {
            clipboard.destroy();
        }
    }, []);
    return (
        <div>
            {emojiData.map((emoji, index) => {
                return <EmojiResultRow
                            key={index} 
                            title={emoji.title}
                            symbol={emoji.symbol}
                        />
            })}
        </div>
    );
}
export default EmojiResults;
