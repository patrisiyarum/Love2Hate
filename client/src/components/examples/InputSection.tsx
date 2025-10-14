import InputSection from '../InputSection'

export default function InputSectionExample() {
  return (
    <InputSection 
      onSubmit={(dislikes) => console.log('Submitted:', dislikes)}
      isLoading={false}
    />
  )
}
