import { useState, useEffect } from 'react';
import catSvg from '../assets/images/cat.svg';
import { useAnimation } from '../hooks/useAnimation';
import '../styles/animations.css';

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation(false);
  const [clickCount, setClickCount] = useState(0);

  const handleCatClick = () => {
    setClickCount(prev => prev + 1);
    toggleAnimation();
  };

  const handleKeyPress = (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      toggleAnimation();
    }
  };

  useEffect(() => {
    if (clickCount > 0 && clickCount % 10 === 0) {
      console.log(`고양이가 ${clickCount}번 춤췄습니다! 🎉`);
    }
  }, [clickCount]);

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        onClick={handleCatClick}
        onKeyDown={handleKeyPress}
        tabIndex="0"
        role="button"
        aria-label={`고양이 댄싱 토글 버튼 ${isAnimating ? '현재 춤추는 중' : '현재 정지 상태'}`}
      >
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          className="control-btn"
          onClick={toggleAnimation}
        >
          {isAnimating ? '춤 멈추기 🛑' : '춤추기 시작! 🎵'}
        </button>

        <div className="stats">
          <span>춤춘 횟수: {clickCount}회</span>
        </div>
      </div>

      <p className="instruction">
        고양이를 클릭하거나 버튼을 눌러 춤을 시작해보세요!<br/>
        <small>💡 키보드 스페이스바나 엔터키로도 제어 가능합니다</small>
      </p>
    </div>
  );
}

export default DancingCat;