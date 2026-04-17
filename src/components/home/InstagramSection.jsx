import { FaHeart, FaRegComment, FaInstagram } from 'react-icons/fa'
import { instagramPosts, instagramProfile } from '../../data/instagramPosts'

const InstagramSection = () => {
  return (
    <section className="pgca-section instagram-section">
      <div className="pgca-container">
        <div className="instagram-section__header">
          <p className="instagram-section__eyebrow">Redes</p>
          <h2 className="instagram-section__title">Síguenos en Instagram</h2>
          <p className="instagram-section__description">
            Publicaciones destacadas del despacho con acceso directo a cada post.
          </p>
        </div>

        <div className="instagram-widget">
          <div className="instagram-widget__topbar">
            <div className="instagram-widget__brand">
              <div className="instagram-widget__avatar">
                <FaInstagram />
              </div>

              <div className="instagram-widget__brand-text">
                <strong>{instagramProfile.displayName}</strong>
                <span>{instagramProfile.username}</span>
              </div>
            </div>

            <a
              href={instagramProfile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="instagram-widget__profile-link"
            >
              Ver perfil
            </a>
          </div>

          <div className="instagram-widget__grid">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noreferrer"
                className="instagram-card"
              >
                <div className="instagram-card__image-wrapper">
                  <img
                    src={post.image}
                    alt={`Publicación ${post.id}`}
                    className="instagram-card__image"
                  />

                  <div className="instagram-card__overlay">
                    <div className="instagram-card__stats instagram-card__stats--overlay">
                      <span>
                        <FaHeart />
                        {post.likes}
                      </span>
                      <span>
                        <FaRegComment />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="instagram-card__content">
                  <div className="instagram-card__meta">
                    <span className="instagram-card__username">
                      {instagramProfile.username}
                    </span>
                  </div>

                  <p className="instagram-card__caption">{post.caption}</p>

                  <div className="instagram-card__stats">
                    <span>
                      <FaHeart />
                      {post.likes}
                    </span>
                    <span>
                      <FaRegComment />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection