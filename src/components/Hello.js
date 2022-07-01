import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Hello = () => {

  const {text} = useTypewriter({
    words: ['hey', 'my name is miles kang', 'go check out my beats!'],
    loop: 0,
    typeSpeed: 95,
    deleteSpeed: 60
  })

  return (
    <div>
      <span>{text}</span>
      <Cursor />
    </div>
  );
}