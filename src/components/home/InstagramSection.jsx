import {
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
  FaEllipsisH,
} from 'react-icons/fa'
import { instagramPosts, instagramProfile } from '../../data/instagramPosts'

const InstagramSection = () => {
  return (
    <section className="pgca-section instagram-section" id="instagram">
      <div className="pgca-container">
        <div className="instagram-section__header">
          <p className="instagram-section__eyebrow">Instagram</p>

          <h2 className="instagram-section__title">
            Noticias y actualidad del despacho
          </h2>

          <p className="instagram-section__description">
            Publicaciones recientes del perfil oficial de la firma.
          </p>
        </div>

        <div className="instagram-widget">
          <div className="instagram-widget__grid">
            {instagramPosts.map((post) => (
              <article className="instagram-card" key={post.id}>
                <a
                  href={instagramProfile.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-card__top"
                >
                  <div className="instagram-card__author">
                    <img
                      src={instagramProfile.avatar}
                      alt={instagramProfile.displayName}
                      className="instagram-card__avatar"
                    />

                    <div>
                      <strong>{instagramProfile.username.replace('@', '')}</strong>
                      <span>Peregrina, Guerrero, Cardoso & Asociados</span>
                    </div>
                  </div>

                  <FaEllipsisH className="instagram-card__menu-icon" />
                </a>

                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-card__image-link"
                  aria-label={`Abrir publicación ${post.id} en Instagram`}
                >
                  <img
                    src={post.image}
                    alt={`Publicación ${post.id} de Instagram`}
                    className="instagram-card__image"
                  />

                  <div className="instagram-card__hover-stats">
                    <span>
                      <FaHeart />
                      {post.likes}
                    </span>
                    <span>
                      <FaRegComment />
                      {post.comments}
                    </span>
                  </div>
                </a>

                <div className="instagram-card__body">
                  <div className="instagram-card__actions">
                    <div className="instagram-card__actions-left">
                      <FaHeart />
                      <FaRegComment />
                      <FaRegPaperPlane />
                    </div>

                    <FaRegBookmark />
                  </div>

                  <p className="instagram-card__likes">
                    <FaHeart />
                    {post.likes}
                  </p>

                  <p className="instagram-card__caption">
                    <strong>{instagramProfile.username.replace('@', '')}</strong>
                    <span>{post.caption}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection