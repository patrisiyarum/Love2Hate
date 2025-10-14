import SuggestionsGrid from '../SuggestionsGrid'

export default function SuggestionsGridExample() {
  const mockSuggestions = [
    {
      title: 'Cozy Café Reading',
      description: 'Enjoy a quiet afternoon with a good book in a peaceful café setting',
      reasons: [
        'Relaxing atmosphere without crowds',
        'Control your own space and pace',
        'Gentle background ambiance'
      ],
      icon: '📚'
    },
    {
      title: 'Mild Comfort Food',
      description: 'Discover flavorful dishes with gentle, soothing tastes',
      reasons: [
        'Rich flavors without intense heat',
        'Easy on your palate',
        'Wide variety of options'
      ],
      icon: '🍲'
    },
    {
      title: 'Nature Walks',
      description: 'Explore scenic trails and peaceful outdoor spaces',
      reasons: [
        'Open spaces, no crowds',
        'Calming natural sounds',
        'Fresh air and tranquility'
      ],
      icon: '🌲'
    },
    {
      title: 'Mystery Podcasts',
      description: 'Engaging storytelling without scary visuals',
      reasons: [
        'Suspenseful without being frightening',
        'Control your listening pace',
        'Safe thriller experience'
      ],
      icon: '🎧'
    }
  ];
  
  return <SuggestionsGrid suggestions={mockSuggestions} />
}
