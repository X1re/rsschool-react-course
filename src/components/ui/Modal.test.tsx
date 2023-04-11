import { render, screen, fireEvent } from '@testing-library/react';
import { vitest } from 'vitest';
import Modal from './Modal';

const mockCard = {
  farm: 356666,
  id: '56546546546',
  owner: 'roewjkew',
  secret: 'reowijrew',
  server: '4234323',
  title: 'Card 1',
  isfamily: 1,
  isfriend: 2,
  ispublic: 3,
  onShowModal: () => {},
  onCardClick: (id: string) => {
    id;
  },
  type: 'photo',
};

describe('Modal', () => {
  it('renders the "thank you" message when modalType prop is "submit"', () => {
    render(<Modal modalType="submit" open={true} onClose={() => {}} />);
    const message = screen.getByText(/thank you/i);
    expect(message).toBeInTheDocument();
  });

  it('renders the card modal when modalType prop is not "submit"', () => {
    render(<Modal modalType="card" open={true} onClose={() => {}} card={mockCard} />);
    const title = screen.getByText(/title:/i);
    const owner = screen.getByText(/owner:/i);
    const id = screen.getByText(/id:/i);
    const server = screen.getByText(/server:/i);
    expect(title).toHaveTextContent(mockCard.title);
    expect(owner).toHaveTextContent(mockCard.owner);
    expect(id).toHaveTextContent(mockCard.id);
    expect(server).toHaveTextContent(mockCard.server);
  });

  it('calls onClose when "X" button is clicked', () => {
    const onClose = vitest.fn();
    render(<Modal modalType="submit" open={true} onClose={onClose} />);
    const closeButton = screen.getByText(/x/i);
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledWith(false);
  });

  it('calls onClose when clicking outside of the modal', () => {
    const onClose = vitest.fn();
    render(<Modal modalType="submit" open={true} onClose={onClose} />);
    const modalContainer = screen.getByTestId('modal-container');
    fireEvent.click(modalContainer);
    expect(onClose).toHaveBeenCalledWith(false);
  });
});
