import InputSection from '../InputSection'

export default function InputSectionExample() {
  return (
    <InputSection 
      onSubmit={(dislikes, category) => console.log('Submitted:', dislikes, category)}
      isLoading={false}
    />
  )
}
