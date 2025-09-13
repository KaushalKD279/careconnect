import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CareConnect - Your Personal Health Companion',
  description: 'A comprehensive health management platform that helps you track your health, manage medications, store medical records, and stay connected with your family.',
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}




