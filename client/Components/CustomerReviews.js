import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { incrementIndex, decrementIndex } from '../store/slices'
import { ReviewCard, IndexIndicator } from '../Components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { Button } from './styled-components/clickables'

const Wrapper = styled(FlexColContainer)`
  height: 77vh;
  background-color: #00356b;
  width: 100vw;
`

const ReviewSection = styled(FlexContainer)`
  position: relative;
  margin-top: 32vh;
  align-items: center;
`

const ButtonsSection = styled(FlexContainer)`
  z-index:3;
  justify-content: space-between;
`

const CenterReview = styled(FlexContainer)`
  position: absolute;
  width: 36vw;
  height: 65vh;
  opacity: 1;
  z-index: 2;
  transform: translateX(0);
  background-color: white;
`

const LeftReview = styled(FlexContainer)`
  position: absolute;
  width: 30vw;
  height: 55vh;
  background-color: white;
  opacity: 0.7;
  z-index: 1;
  transform: translateX(-100%);
`

const RightReview = styled(LeftReview)`
  transform: translateX(100%);
`

const IndexIndicatorSection = styled(FlexContainer)`
  margin-top: 25vh;
`

const CustomerReviews = ({ reviews }) => {
  const { currentIndex, currentPage } = useSelector(state => state.reviewSlider)
  const dispatch = useDispatch()

  const chooseActivePage = () => {
    return reviews.map((_, index) => ({
      id: index + 1,
      isActive: index + 1 === currentPage,
    }))
  }
  
  const setVisibleReviews = () => {
    const lastIndex = reviews.length - 1
    if(currentIndex === 0) {
      return [reviews[lastIndex], reviews[0], reviews[1]]
    }

    if(currentIndex === lastIndex) {
      return [reviews[lastIndex - 1], reviews[lastIndex], reviews[0]]
    }

    return reviews.slice(currentIndex - 1, currentIndex + 2)
  }

  const visibleReviews = setVisibleReviews()
  const maxIndex = reviews.length - 1

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      dispatch(decrementIndex());
    }
  }

  const handleRightClick = () => {
    if (currentIndex < maxIndex) {
      dispatch(incrementIndex());
    }
  }

  return (
    <Wrapper>
      <ReviewSection>
        <LeftReview>
          <ReviewCard review={visibleReviews[0]} />
        </LeftReview>
        <CenterReview>
          <ReviewCard review={visibleReviews[1]} />
        </CenterReview>
        <RightReview>
          <ReviewCard review={visibleReviews[2]} />
        </RightReview>
      </ReviewSection>
      <ButtonsSection>
        <Button width={15} height={40} onClick={handleLeftClick}>
          Decrement
        </Button>
        <Button width={15} height={40} onClick={handleRightClick}>
          Increment
        </Button>
      </ButtonsSection>
      <IndexIndicatorSection>
        <IndexIndicator pages={chooseActivePage()} />
      </IndexIndicatorSection>
    </Wrapper>
  )
}

export default CustomerReviews
