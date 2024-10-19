import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { ProductsFilter, ProductList } from '../Components'
import { useGetProductsQuery } from '../store/slices'

const Wrapper = styled(FlexContainer)`

`

const ProductsView = ({ categories }) => {
  const [categoryIds, setCategoryIds] = useState([])
  const [isCoffeeFilter, setIsCoffeeFilter] = useState(false)
  const [activePage, setActivePage] = useState(1)
  const [productPages, setProductPages] = useState([])

  const { data, isLoading, isError, refetch } = useGetProductsQuery({categoryIds: categoryIds.join(), isCoffeeFilter: isCoffeeFilter })

  const createPages = (products, qtyPerPage) => {
    let pages = []
    let currentPage = []
    for(let i = 0; i < products.length; i++) {
      currentPage.push(products[i])

      if(currentPage.length === qtyPerPage) {
        pages.push(currentPage)
        currentPage = []
      }
    }

    if (currentPage.length > 0) {
      pages.push(currentPage)
    }
    setProductPages(pages)
  }

  const incrementPage = qty => {
    let nextPage;
    if(!qty) {
      nextPage = activePage + 1
    } else {
      nextPage = activePage + qty
    }

    setActivePage(nextPage)
  }

  const decrementPage = qty => {
    let nextPage;
    if(!qty) {
      nextPage = activePage - 1
    } else {
      nextPage = activePage - qty
    }

    setActivePage(nextPage)
  }

  useEffect(() => {
    if (data) {
      const qtyPerPage = 10
      createPages(data, qtyPerPage)
    }
  }, [data])


  const manageSelections = id => {
    if(categoryIds.includes(id)) {
      setCategoryIds(categoryIds.filter(catId => id !== catId))
    } else {
      setCategoryIds(categoryIds.concat(id))
    }
  }

  const handleCoffeeSelect = id => {
    manageSelections(id)
    setIsCoffeeFilter(true)
    refetch()
  }

  const handleMiscSelect = id => {
    manageSelections(id)
    setIsCoffeeFilter(false)
    refetch()
  }
  
  return (
    <Wrapper>
      <ProductsFilter
        categories={categories}
        handleCoffeeSelect={handleCoffeeSelect}
        handleMiscSelect={handleMiscSelect}
      />
      <ProductList
        products={productPages[activePage]}
        numPages={productPages.length}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        activePage={activePage}
      />
    </Wrapper>
  )
}

export default ProductsView
