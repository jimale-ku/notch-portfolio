import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SimonGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('Press Start to Play');
  const colors = ['red', 'green', 'blue', 'yellow'];
  const audioRefs = useRef({});

  useEffect(() => {
    // Initialize audio elements
    colors.forEach(color => {
      audioRefs.current[color] = new Audio(`/sounds/${color}.mp3`);
    });
  }, []);

  const playSound = (color) => {
    if (audioRefs.current[color]) {
      audioRefs.current[color].currentTime = 0;
      audioRefs.current[color].play();
    }
  };

  const startGame = () => {
    setSequence([]);
    setUserSequence([]);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    setMessage('Watch the sequence...');
    addToSequence();
  };

  const addToSequence = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setSequence(prev => [...prev, newColor]);
    playSequence([...sequence, newColor]);
  };

  const playSequence = (sequenceToPlay) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < sequenceToPlay.length) {
        playSound(sequenceToPlay[i]);
        i++;
      } else {
        clearInterval(interval);
        setUserSequence([]);
        setMessage('Your turn!');
      }
    }, 1000);
  };

  const handleColorClick = (color) => {
    if (!isPlaying || gameOver) return;

    playSound(color);
    const newUserSequence = [...userSequence, color];
    setUserSequence(newUserSequence);

    if (newUserSequence[newUserSequence.length - 1] !== sequence[newUserSequence.length - 1]) {
      setGameOver(true);
      setIsPlaying(false);
      setMessage('Game Over! Press Start to Play Again');
      return;
    }

    if (newUserSequence.length === sequence.length) {
      setScore(prev => prev + 1);
      setMessage('Correct! Next level...');
      setTimeout(() => {
        addToSequence();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-primary">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-tertiary/80 backdrop-blur-sm rounded-xl p-6 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Simon Game</h2>
          <div className="text-center mb-6">
            <p className="text-textDark text-xl mb-2">{message}</p>
            <p className="text-secondary text-2xl font-bold">Score: {score}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {colors.map((color) => (
              <motion.button
                key={color}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`h-32 rounded-lg ${color === 'red' ? 'bg-red-500' : 
                  color === 'green' ? 'bg-green-500' : 
                  color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'} 
                  hover:brightness-110 transition-all duration-200`}
                onClick={() => handleColorClick(color)}
                disabled={!isPlaying || gameOver}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-secondary text-primary rounded-lg font-semibold
                       hover:bg-secondary/90 transition-all duration-300"
              onClick={startGame}
            >
              {gameOver ? 'Play Again' : 'Start Game'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimonGame; 