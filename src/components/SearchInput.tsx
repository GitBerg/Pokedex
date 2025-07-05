'use client'

import { IoIosSearch } from "react-icons/io";
export default function SearchInput({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%'}}>
        <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name or number"
      style={{
        width: '100%',
        padding: '10px 14px',
        borderRadius: 50,
        border: '1px solid #ccc',
        marginBottom: 24,
        marginTop: 35,
        fontSize: '0.9rem',
        outline: 'none'
      }}
    />
    <span><IoIosSearch size={20} style={{position: 'absolute', right: 10, bottom: 33, fill: '#666'}}/></span>
    </div>
  )
}