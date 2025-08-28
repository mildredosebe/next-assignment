interface TagsIconProps {
  icon: React.ElementType;
  text: string;
  width?: string;   
  height?: string;  
  color?: string; 
  className?: string; 
}

export function TagsIcon({
  icon: Icon,
  text,
  width = "18px",
  height = "28px",
  color = "#DB4444",
  className = ""
}: TagsIconProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        style={{
          display: "inline-flex",
          width,
          height,
          backgroundColor: color,
          borderRadius: "6px",
        }}
      >
        <Icon
          style={{
            color: color,
            opacity: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </span>
      <span className="text-primary font-semibold text-base" style={{ color }}>
        {text}
      </span>
    </div>
  );
}