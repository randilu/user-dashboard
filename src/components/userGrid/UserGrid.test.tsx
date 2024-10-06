import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserGrid from './UserGrid';
import { User } from '../../types';
import { mockUsers } from '../../mocks';

describe('UserGrid', () => {
  it('renders Loader when isLoading is true', () => {
    render(<UserGrid isLoading={true} error={null} users={[]} searchText="" />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders Error when there is an error', () => {
    render(<UserGrid isLoading={false} error={new Error('Test Error')} users={[]} searchText="test" />);
    expect(screen.getByText("Something went wrong. Please refresh the page and try again.")).toBeInTheDocument();
  });

  it('renders EmptyBanner when there are no users', () => {
    render(<UserGrid isLoading={false} error={null} users={[]} searchText="test" />);
    expect(screen.getByTestId('empty-banner')).toBeInTheDocument();
  });

  it('renders user grid when there are users', () => {
    const users: User[] = [...mockUsers];
    render(<UserGrid isLoading={false} error={null} users={users} searchText="test" />);
    expect(screen.getByText(users[0].name)).toBeInTheDocument();
    expect(screen.getByText(users[1].name)).toBeInTheDocument();
  });
});
