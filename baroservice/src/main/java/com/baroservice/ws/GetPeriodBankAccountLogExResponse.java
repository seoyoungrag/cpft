
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetPeriodBankAccountLogExResult" type="{http://ws.baroservice.com/}PagedBankAccountLogEx" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getPeriodBankAccountLogExResult"
})
@XmlRootElement(name = "GetPeriodBankAccountLogExResponse")
public class GetPeriodBankAccountLogExResponse {

    @XmlElement(name = "GetPeriodBankAccountLogExResult")
    protected PagedBankAccountLogEx getPeriodBankAccountLogExResult;

    /**
     * getPeriodBankAccountLogExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedBankAccountLogEx }
     *     
     */
    public PagedBankAccountLogEx getGetPeriodBankAccountLogExResult() {
        return getPeriodBankAccountLogExResult;
    }

    /**
     * getPeriodBankAccountLogExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedBankAccountLogEx }
     *     
     */
    public void setGetPeriodBankAccountLogExResult(PagedBankAccountLogEx value) {
        this.getPeriodBankAccountLogExResult = value;
    }

}
