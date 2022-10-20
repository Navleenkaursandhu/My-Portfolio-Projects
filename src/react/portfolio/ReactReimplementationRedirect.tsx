export const ReactReimplementationRedirect = (props) => {
  return (
    <>
      <div>
        This project has been re-implemented in React. See the React implementation and the full description
        of this project <a className='text-blue-600 underline underline-offset-2' href={`#${props.link}`}>here</a>. You
        can still view the Vanilla JS implementation of the project and its source code below.
      </div>
    </>
  )
}
