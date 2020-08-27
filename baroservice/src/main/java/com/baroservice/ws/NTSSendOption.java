
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>NTSSendOption complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType name="NTSSendOption"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="TaxationOption" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxationAddTaxAllowYN" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxExemptionOption" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxExemptionAddTaxAllowYN" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "NTSSendOption", propOrder = {
    "taxationOption",
    "taxationAddTaxAllowYN",
    "taxExemptionOption",
    "taxExemptionAddTaxAllowYN"
})
public class NTSSendOption {

    @XmlElement(name = "TaxationOption")
    protected int taxationOption;
    @XmlElement(name = "TaxationAddTaxAllowYN")
    protected int taxationAddTaxAllowYN;
    @XmlElement(name = "TaxExemptionOption")
    protected int taxExemptionOption;
    @XmlElement(name = "TaxExemptionAddTaxAllowYN")
    protected int taxExemptionAddTaxAllowYN;

    /**
     * taxationOption 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxationOption() {
        return taxationOption;
    }

    /**
     * taxationOption 속성의 값을 설정합니다.
     * 
     */
    public void setTaxationOption(int value) {
        this.taxationOption = value;
    }

    /**
     * taxationAddTaxAllowYN 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxationAddTaxAllowYN() {
        return taxationAddTaxAllowYN;
    }

    /**
     * taxationAddTaxAllowYN 속성의 값을 설정합니다.
     * 
     */
    public void setTaxationAddTaxAllowYN(int value) {
        this.taxationAddTaxAllowYN = value;
    }

    /**
     * taxExemptionOption 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxExemptionOption() {
        return taxExemptionOption;
    }

    /**
     * taxExemptionOption 속성의 값을 설정합니다.
     * 
     */
    public void setTaxExemptionOption(int value) {
        this.taxExemptionOption = value;
    }

    /**
     * taxExemptionAddTaxAllowYN 속성의 값을 가져옵니다.
     * 
     */
    public int getTaxExemptionAddTaxAllowYN() {
        return taxExemptionAddTaxAllowYN;
    }

    /**
     * taxExemptionAddTaxAllowYN 속성의 값을 설정합니다.
     * 
     */
    public void setTaxExemptionAddTaxAllowYN(int value) {
        this.taxExemptionAddTaxAllowYN = value;
    }

}
