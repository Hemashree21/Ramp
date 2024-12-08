import classNames from "classnames"
import { useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    if (!disabled) {
      const newCheckedState = !isChecked
      setIsChecked(newCheckedState)

      if (onChange) {
        onChange(newCheckedState)
      }
    }
  }

  const inputId = `RampInputCheckbox-${id}`

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor={inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": isChecked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  )
}
