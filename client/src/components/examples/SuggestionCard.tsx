import SuggestionCard from '../SuggestionCard'

export default function SuggestionCardExample() {
  const mockSuggestion = {
    title: 'Cozy Café Reading',
    description: 'Enjoy a quiet afternoon with a good book in a peaceful café setting',
    reasons: [
      'Relaxing atmosphere without crowds',
      'Control your own space and pace',
      'Gentle background ambiance'
    ],
    icon: '📚'
  };
  
  return <SuggestionCard suggestion={mockSuggestion} index={0} />
}
