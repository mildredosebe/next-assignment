import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BestSellingProducts from './components/BestSellingProducts';
import BrowseByCategory from './components/BrowseByCategory';
import ExploreProducts from './components/ExploreProducts';
import FreshSales from './components/FreshSales';
import NewArrivals from './components/NewArrival';

describe('Home Page Sections', () => {
  beforeEach(() => {
    render(
      <>
        <BestSellingProducts />
        <BrowseByCategory />
        <ExploreProducts />
        <FreshSales />
        <NewArrivals />
      </>
    );
  });

  it('renders Best Selling Products section with product cards', () => {
    expect(screen.getByText(/Best Selling Products/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View All/i })).toBeInTheDocument();
    expect(screen.getAllByAltText(/The north coat|Gucci duffle bag|RGB liquid CPU Cooler|Small BookSelf/i)).toHaveLength(4);
    expect(screen.getByText(/\$260/)).toBeInTheDocument();
    expect(screen.getByText(/\$960/)).toBeInTheDocument();
  });

  it('renders Browse by Category section with category cards', () => {
    expect(screen.getByText(/Browse by category/i)).toBeInTheDocument();
    expect(screen.getByText(/Phones/i)).toBeInTheDocument();
    expect(screen.getByText(/Computers/i)).toBeInTheDocument();
    expect(screen.getByText(/SmartWatch/i)).toBeInTheDocument();
    expect(screen.getByText(/Camera/i)).toBeInTheDocument();
    expect(screen.getByText(/HeadPhones/i)).toBeInTheDocument();
    expect(screen.getByText(/Gaming/i)).toBeInTheDocument();
  });

  it('renders Explore our products section and product cards', () => {
    expect(screen.getByText(/Explore our products/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View All Products/i })).toBeInTheDocument();
    expect(screen.getByText(/Breed Dry Dog Food/i)).toBeInTheDocument();
    expect(screen.getByText(/CANON EOS DSLR Camera/i)).toBeInTheDocument();
    expect(screen.getByText(/ASUS FHD Gaming Laptop/i)).toBeInTheDocument();
    expect(screen.getByText(/Kids Electric Car/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Add To Cart/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('img').some(img => img.getAttribute('alt') === 'Breed Dry Dog Food')).toBeTruthy();
  });

  it('renders Fresh Sales section with timers and product cards', () => {
    expect(screen.getByText(/Fresh Sales/i)).toBeInTheDocument();
    expect(screen.getByText(/03/)).toBeInTheDocument();
    expect(screen.getByText(/Days/i)).toBeInTheDocument();
    expect(screen.getByText(/HAVIT HV-G92 Gamepad/i)).toBeInTheDocument();
    expect(screen.getByText(/AK-900 Wired Keyboard/i)).toBeInTheDocument();
    expect(screen.getByText(/S-Series Comfort Chair/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Add To Cart/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole('button', { name: /View All Products/i })).toBeInTheDocument();
  });

  it('renders New Arrival section and featured cards', () => {
    expect(screen.getByText(/New Arrival/i)).toBeInTheDocument();
    expect(screen.getByText(/PlayStation 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Women’s Collections/i)).toBeInTheDocument();
    expect(screen.getByText(/Speakers/i)).toBeInTheDocument();
    expect(screen.getByText(/Perfume/i)).toBeInTheDocument();
    expect(screen.getByText(/FREE AND FAST DELIVERY/i)).toBeInTheDocument();
    expect(screen.getByText(/24\/7 CUSTOMER SERVICE/i)).toBeInTheDocument();
    expect(screen.getByText(/MONEY BACK GUARANTEE/i)).toBeInTheDocument();
  });
});