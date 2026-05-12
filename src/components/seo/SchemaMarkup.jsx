import { Helmet } from 'react-helmet-async'

const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Peregrina Guerrero Cardoso & Asociados',
    alternateName: 'PGCA',
    url: 'https://pgca.com.mx',
    email: 'contacto@pgca.com.mx',
    telephone: '+52 55 9309 5640',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Insurgentes Sur 1877, Piso 8',
        addressLocality: 'Álvaro Obregón',
        addressRegion: 'Ciudad de México',
        postalCode: '01020',
        addressCountry: 'MX',
    },
    areaServed: 'Ciudad de México',
    serviceType: [
        'Derecho Penal',
        'Derecho Fiscal y Administrativo',
        'Derecho Corporativo',
        'Contabilidad',
    ],
}

const SchemaMarkup = () => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    )
}

export default SchemaMarkup