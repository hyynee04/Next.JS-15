const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-25 m-2.5 border border-[#ddd] flex justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]">
      {children}
    </div>
  )
}

export default Card;