import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: Content;
  onDelete: (content: number) => void;
}

interface Content {
  id: number;
  msg: string;
}

export function Comment({ content, onDelete }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComent() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={() => onDelete(content.id)}
              title="Deletar comentário"
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{content.msg}</p>
        </div>

        <footer>
          <button onClick={handleLikeComent}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
