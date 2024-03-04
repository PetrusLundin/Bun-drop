export default function About() {

  return (
    <div className="spanish-inquisition">
      <video className="video-fix" autoPlay controls>
        <source src="images/spanishinquisition.mp4"></source>
      </video>
      <p className="spanish-info">
        The Spanish Inquisition was a judicial institution that lasted between
        1478 and 1834. Its ostensible purpose was to combat heresy in Spain,
        but, in practice, it resulted in consolidating power in the monarchy of
        the newly unified Spanish kingdom. Its brutal methods led to widespread
        death and suffering.
      </p>
    </div>
  );
}
