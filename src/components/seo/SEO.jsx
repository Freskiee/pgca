import { Helmet } from 'react-helmet-async'

const SEO = ({
    title,
    description,
    image = 'https://pgca.com.mx/og-image.jpg',
    url = 'https://pgca.com.mx',
}) => {
    const fullTitle = `${title} | Peregrina Guerrero Cardoso & Asociados`

    return (
        <Helmet>
            {/* Primary SEO */}
            <title>{fullTitle}</title>

            <meta name="description" content={description} />

            <meta
                name="keywords"
                content="
          despacho legal cdmx,
          abogados cdmx,
          derecho penal,
          derecho fiscal,
          derecho administrativo,
          derecho corporativo,
          contabilidad,
          asesoría legal,
          despacho fiscal,
          abogados mexico,
          abogados ciudad de mexico
        "
            />

            <meta name="author" content="Peregrina Guerrero Cardoso & Asociados" />

            {/* Mobile */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Theme */}
            <meta name="theme-color" content="#1f2f4d" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_MX" />
            <meta property="og:site_name" content="PGCA" />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />

            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    )
}

export default SEO