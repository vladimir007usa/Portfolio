import '../styles/Project.scss'
import ProjectCard from './ProjectCard'

const images = [{ img: 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735920369/link-leaf_umlmpg.jpg', link: 'https://link-leaf.sayantan.site', name: 'Link Leaf', desc: 'A full-stack links management webapp.', stack: ['https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/next-js.256x256_vobqud.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/typescript_ajaux1.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924628/tailwind-css.256x154_qr64sr.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924634/postgresql_ngkcdd.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735926923/prisma.212x256_smmdia.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735927121/cloudinary-icon-512x335-z2n5aue3_r4wdfl.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735927211/brand-framer-motion-icon-512x512-rchjyg0u_so3pqs.png'] },

{ img: 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735920368/Tunes_vfk6ts.jpg', link: 'https://tunes.sayantan.site', name: 'Tunes', desc: 'A full-stack music streaming application.', stack: ['https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/react_hqdzmw.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/typescript_ajaux1.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924632/nodejs_hn31xg.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735927564/pngwing.com_dbwszb.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924639/pngwing-com-4_gt48mu.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924632/mongodb_rr36ue.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924635/redis_gxe0ub.png'] },

{ img: 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735920368/Snapp_g37vzj.jpg', link: 'https://snapp.sayantan.site', name: 'Snapp!', desc: 'A web application designed to make image exploration and sharing easier!', stack: ['https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/react_hqdzmw.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/typescript_ajaux1.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924639/pngwing-com-4_gt48mu.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735927211/brand-framer-motion-icon-512x512-rchjyg0u_so3pqs.png'] },

{ img: 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735920368/useImageDownloader_sifmjg.jpg', link: 'https://www.npmjs.com/package/use_image_downloader', name: 'use-image-downloader', desc: 'A ReactJS hook designed to make image downloading easier!', stack: ['https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/react_hqdzmw.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/typescript_ajaux1.png'] },

{ img: 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735920368/pacefit_xziowr.jpg', link: 'https://pace-fit.vercel.app', name: 'PaceFit', desc: 'A modern e-commerce application.', stack: ['https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/react_hqdzmw.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/javascript_ez3oe2.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924639/pngwing-com-4_gt48mu.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924631/pngwing-com-1_clhv3k.png'] },


{ img: 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735920368/PublicApiHub_irthvm.jpg', link: 'https://publicapi-hub.vercel.app', name: 'PublicAPI-Hub', desc: 'A diverse collection of categorized APIs.', stack: ['https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/react_hqdzmw.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924639/pngwing-com-4_gt48mu.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924629/javascript_ez3oe2.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735924632/nodejs_hn31xg.png', 'https://res.cloudinary.com/dqn1hcl8c/image/upload/v1735927564/pngwing.com_dbwszb.png'] }]

const Project = () => {

    return (
        <div className='Projects'>
            <h1>PROJECTS</h1>
            <div className="projects-container">
                {
                    images.map((item, index) => <ProjectCard key={index} image={item.img} link={item.link} name={item.name} desc={item.desc} stack={item.stack} />)
                }
            </div>
        </div>
    )
}

export default Project