import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio
      nostrum deserunt repudiandae animi aperiam! Minus, vitae facere. Mollitia
      optio nobis totam tempora iste, rem enim necessitatibus beatae architecto
      maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
      maiores, voluptatem molestias adipisci natus asperiores, at dignissimos
      ducimus velit rerum commodi veritatis voluptates eveniet quae eum? Dolor,
      voluptate tempora! Praesentium!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=jcosilva&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jcosilva&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
